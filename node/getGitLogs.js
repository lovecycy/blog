import { spawn } from 'cross-spawn'
import fs from 'fs-extra'
import { basename, dirname } from 'path'

const cache = new Map()

/**
 * 获取第一次创建时间
 * @param file 
 * @returns Promise
 */
export function useGitTimestamp(file) {
  const cached = cache.get(file)
  if (cached) return cached

  if (!fs.existsSync(file)) return 0

  return new Promise((resolve, reject) => {
    const child = spawn(
      'git',
      ['log', '--reverse', '--pretty="%ai"', basename(file)],
      { cwd: dirname(file) }
    )

    let output = ''
    child.stdout.on('data', (d) => (output += String(d)))

    child.on('close', () => {
      const timestamps = output
        .split('\n')
        .filter(Boolean)
        .map((line) => +new Date(line))
      const firstCommitTimestamp = timestamps.length > 0 ? timestamps[0] : 0
      resolve(firstCommitTimestamp)
    })

    child.on('error', reject)
  })
}