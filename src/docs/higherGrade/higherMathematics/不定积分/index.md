# 不定积分

[[toc]]

## 一、原函数的定义

## 二、不定积分的定义

## 三、不定积分运算性质

1. 数乘:
$\int kf(x)dx = k\int f(x)dx$
2. 加减法:
$\int [f(x) \pm g(x)]dx = \int f(x)dx \pm \int g(x)dx$

## 四、不定积分的计算方法

1. [基础：**积分表**](#基础积分表)
2. [第一类换元法：凑微分法](#第一类换元积分法)
3. 第二类换元法
4. 分部积分法
5. 有理分式积分

### 基础积分表

> 必记

::: info 常见微分

$\int \frac{1}{2\sqrt{x}}dx = \sqrt{x} + C$

$\int \frac{-1}{x^2}dx = \frac{1}{x} + C$

:::

| 序号 | 公式 |
| --- | --- |
| 1 |  $\int x^{\alpha} d x=\frac{x^{\alpha+1}}{\alpha+1}+C \quad(\alpha \neq-1 \text {, 实常数 })$ |
| 2 | $\int \frac{1}{x} d x=\ln \|x\|+C$ |
| 3 | $\int a^{x} d x=\frac{1}{\ln a} a^{x}+C \quad(a>0, a \neq 1)$ |
| 4 | $\int e^{x} d x=e^{x}+C$ |
| 5 | $\int \sin x d x=-\cos x+C$ |
| 6 | $\int \cos x d x=\sin x+C$ |
| 7 | $\int \tan x d x=-\ln \|\cos x\|+C$ |
| 8 | $\int \cot x d x=\ln \|\sin x\|+C$ |
| 9 | $\int \sec x d x=\ln \|\sec x+\tan x\|+C$ |
| 10 | $\int \csc x d x=\ln \|\csc x-\cot x\|+C$ |
| 11 | $\int \sec ^{2} x d x=\tan x+C$ |
| 12 | $\int \csc ^{2} x d x=-\cot x+C$ |
| 13 | $\int \tan x \sec x d x=\sec x+C$ |
| 14 | $\int \cot x \csc x d x=-\csc x+C$ |
| 15 | $\int \frac{d x}{\sqrt{a^{2}-x^{2}}}=\arcsin \frac{x}{a}+C \quad(a>0)$ |
| 16 | $\int \frac{d x}{a^{2}+x^{2}}=\frac{1}{a} \arctan \frac{x}{a}+C$ |
| 17 | $\int \frac{d x}{x^2-a^2} = \frac{1}{2a}ln \left \|  \frac{x-a}{x+a} \right \| +C \quad(a>0)$ |
| 18 | $\int \frac{d x}{\sqrt{x^2 \pm a^2}} = ln(x+\sqrt{x^2 \pm a^2})+C \quad(a>0)$ |

### 第一类换元积分法

> 凑微分法: 凑微分的过程是积分

常见的凑微分形式

若 $\int F(\Box)d\Box$ 可积:

(1). $\int F(ax)dx = \frac{1}{a}\int F(ax)d ax$

(2). $\int F(ax+b)dx = \frac{1}{a}\int F(ax+b)d(ax+b)$

(3). $\int F(\sqrt{x}){\color{yellow}\frac{1}{2\sqrt{x}}dx} = \int F(\sqrt{x})d\sqrt{x}$

(4). $\int F(\frac{1}{x}){\color{yellow}\frac{-1}{x^2}dx} = \int F(\frac{1}{x})d\frac{1}{x}$
