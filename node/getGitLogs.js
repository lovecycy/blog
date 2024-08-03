import { spawn } from 'cross-spawn'
import fs from 'fs-extra'
import { basename, dirname } from 'path'

const cache = new Map()

/**
 * 获取第一次创建时间
 * @param {string} file 
 * @returns {Promise}
 */
export function getGitLogs(file) {
  const cached = cache.get(file)
  if (cached) return cached

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(file)) return reject(0)

    const child = spawn(
      'git',
      ['log', basename(file)],
      { cwd: dirname(file) }
    )

    let output = ''
    child.stdout.on('data', (d) => { output += d})
    child.on('close', () => resolve(parseGitLogOutput(output)))
    child.on('error', reject)
  })
}

/**
 * 解析从git log命令中输出的文本
 * @param {string} logs 
 * @returns {{
 *            commitHash: string,
 *            commitDate: string,
 *            message: string
 *          }[]}
 */
function parseGitLogOutput(logs) {
  logs = logs
  .split('\n')
  .filter(_=>_)
  const commits = [];
  for (let i = 0; i < logs.length; i += 4) {
    const commitHash = logs[i].trim().split(' ')[1];
    // const author = logs[i + 1].match(/Author:\s*(.*)/)[1];
    const commitDate = new Date(logs[i + 2].match(/Date:\s*(.*)/)[1]).getTime();
    const message = logs[i + 3].trim();

    commits.push({
      commitHash,
      // Author: author,
      commitDate,
      message
    });
  }
  return commits;
}