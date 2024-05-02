---
sidebar_label: 텍스트, 코드
pagination_next: tour/icons
---

import CodeBlock from '@theme/CodeBlock';
import Markdown from '@site/static/d2/markdown.d2';
import Text2 from '@site/static/d2/text-2.d2';
import Code2 from '@site/static/d2/code-2.d2';
import NonMarkdownText from '@site/static/d2/non-markdown-text.d2';
import Latex from '@site/static/d2/latex.d2';

# 텍스트

## D2에서는 Markdown으로 독립적인 텍스트 블록을 만들 수 있습니다.

```d2
explanation: |md
  # I can do headers
  - lists
  - lists

  And other normal markdown stuff
|
```

<div style={{width: 300, margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/markdown.svg2')}}></div>

## 대부분의 언어가 지원됩니다

D2는 중국어, 일본어, 한국어, 심지어 이모지와 같은 비라틴 언어들을 포함하여 여러분이 사용하는 거의 모든 언어를 지원합니다!

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/unicode.svg2')}}></div>

## LaTeX

`latex` 또는 `tex`를 사용해 LaTeX 언어 블록을 설정할 수 있습니다.

```d2
plankton -> formula: will steal
formula: {
  equation: |latex
    \\lim_{h \\rightarrow 0 } \\frac{f(x+h)-f(x)}{h}
  |
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/text-2.svg2')}}></div>

LaTeX 블록에 대한 주의 사항:

- D2에서 `\`는 탈출 문자입니다.
  때문에 위의 예시에서 `\\`를 사용한 것입니다.

- LaTeX 블록은 `font-size` 설정을 따르지 않습니다.
  대신 다음 명령들을 사용하여 Latex 스크립트 자체 내에서 스타일을 지정해야 합니다.

  - `\tiny{ }`
  - `\small{ }`
  - `\normal{ }`
  - `\large{ }`
  - `\huge{ }`

- 내부적으로는 [MathJax](https://www.mathjax.org/)를 사용하고 있습니다.
  따라서 완전한 LaTeX가 아닙니다(원래 LaTeX에는 문서 레이아웃 엔진이 포함되어 있습니다).
  D2의 LaTeX 블록은 수학적 표기법을 표시하기 위한 것이지만 기존 LaTeX 문서의 형식을 지원하지 않습니다.
  지원되는 모든 명령 목록은 [이 사이트](https://docs.mathjax.org/en/latest/input/tex/macros/index.html)를 참조하세요.

:::caution
D2는 최신 버전의 MathJax에서 실행되며, 여러모로 유용하지만 안타깝게도 줄 바꿈 기능이 없습니다.
하지만 `displaylines` 명령으로 이 문제를 해결할 수 있습니다.
아래 내용를 참고하세요.
:::

:::note
참고로 아직은 LaTex를 레이블에는 적용할 수 없습니다.
따라서 위의 예시에서는 중첩 구문을 사용했습니다.
레이블에 적용하는 기능은 곧 출시될 예정입니다.
:::

## 코드

다음과 같이 프로그래밍 언어 이름을 적용해 코드 블록을 생성할 수도 있습니다.

```d2
explanation: |go
  awsSession := From(c.Request.Context())
  client := s3.New(awsSession)

  ctx, cancelFn := context.WithTimeout(c.Request.Context(), AWS_TIMEOUT)
  defer cancelFn()
|
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/code-2.svg2')}}></div>

## 고급 기능: Markdown이 아닌 텍스트

경우에 따라 Markdown이 아닌 텍스트가 필요할 수 있습니다.
Markdown 또는 D2가 사용하는 GitHub 스타일의 Markdown이 마음에 들지 않거나, 도형 타입을 텍스트로 빠르게 변경하고 싶을 수 있습니다.
그럴 경우 `shape: text`를 설정하기만 하면 됩니다.

```d2
title: A winning strategy {
  shape: text
  near: top-center
  style: {
    font-size: 55
    italic: true
  }
}

poll the people -> results
results -> unfavorable -> poll the people
results -> favorable -> will of the people
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/non-markdown-text.svg2')}}></div>

## 고급 기능: 블록 문자열

파이프 기호 `|`이 일반적으로 사용되는 Typescript의 경우는 어떻게 하면 될까요?
파이프를 하나 더 붙여서 `||`로 만들면 됩니다.

```d2
my_code: ||ts
  declare function getSmallPet(): Fish | Bird;
||
```

하지만 Typescript는 `||`도 사용하므로 제대로 작동하지 않습니다.
하나 더 붙입시다.

```d2
my_code: |||ts
  declare function getSmallPet(): Fish | Bird;
  const works = (a > 1) || (b < 2)
|||
```

트리플 파이프가 사용되는 언어나 상황이 있을 수 있습니다.
D2에서는 이를 위해 첫 번째 파이프 다음에 특수 기호(영어, 숫자, 공백 또는 `_`가 아님)를 사용할 수 있습니다.

```d2
# 훨씬 깔끔합니다!
my_code: |`ts
  declare function getSmallPet(): Fish | Bird;
  const works = (a > 1) || (b < 2)
`|
```

## 고급 기능: LaTeX 플러그인

D2에는 다음 LaTeX 플러그인들이 포함되어 있습니다.

```d2
amscd plugin: {
  ex: |tex
    \\begin{CD} B @>{\\text{very long label}}>> C S^{{\\mathcal{W}}_\\Lambda}\\otimes T @>j>> T\\\\ @VVV V \\end{CD}
  |
}

braket plugin: {
  ex: |tex
    \\bra{a}\\ket{b}
  |
}

cancel plugin: {
  ex: |tex
    \\cancel{Culture + 5}
  |
}

color plugin: {
  ex: |tex
    \\textcolor{red}{y} = \\textcolor{green}{\\sin} x
  |
}

gensymb plugin: {
  ex: |tex
    \\lambda = 10.6\\,\\micro\\mathrm{m}
  |
}

mhchem plugin: {
  ex: |tex
    \\ce{SO4^2- + Ba^2+ -> BaSO4 v}
  |
}

physics plugin: {
  ex: |tex
    \\var{F[g(x)]}
    \\dd(\\cos\\theta)
  |
}

multilines: {
  ex: |tex
    \\displaylines{x = a + b \\\\ y = b + c}
    \\sum_{k=1}^{n} h_{k} \\int_{0}^{1} \\bigl(\\partial_{k} f(x_{k-1}+t h_{k} e_{k}) -\\partial_{k} f(a)\\bigr) \\,dt
  |
}

# 두 줄로 보여주기 위한 코드
amscd plugin -> braket plugin: {style.opacity: 0}
cancel plugin -> color plugin: {style.opacity: 0}
gensymb plugin -> mhchem plugin: {style.opacity: 0}
physics plugin -> multilines: {style.opacity: 0}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/latex.svg2')}}></div>
