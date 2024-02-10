# 스타일

셰이프의 스타일은 `style` 필드 아래에서 다음 예약 키워드들로 설정할 수 있습니다.

아래에 소개될 것들은 이 기본 다이어그램들에 개별적으로 적용되는 모든 유효한 스타일의 카탈로그입니다.

<div style={{width: "400px", margin: "20px auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-base.svg2')}}></div>

:::note
이번 챕터의 SVG 이미지들은 `direction: right`으로 렌더링되지만 간결성을 위해 스크립트에서는 생략되었습니다.
:::

## Style keywords

- [opacity](#opacity)
- [stroke](#stroke)
- [fill](#fill) (셰이프에만 적용됨)
- [fill-pattern](#fill-pattern) (셰이프에만 적용됨)
- [stroke-width](#stroke-width)
- [stroke-dash](#stroke-dash)
- [border-radius](#border-radius)
- [shadow](#shadow) (셰이프에만 적용됨)
- [3D](#3d) (직사각형/사각형에만 적용됨)
- [multiple](#multiple) (셰이프에만 적용됨)
- [double-border](#double-border) (직사각형/타원에만 적용됨)
- [font](#font)
- [font-size](#font-size)
- [font-color](#font-color)
- [animated](#animated) (연결에만 적용됨)
- [bold, italic, underline](#bold-italic-underline)
- [text-transform](#text-transform)
- [root](#root)

## Opacity

객체의 투명도를 `0`과 `1` 사이의 값으로 설정할 수 있습니다.

```d2
x -> y: hi {
  style: {
    opacity: 0.4
  }
}
x.style.opacity: 0
y.style.opacity: 0.7
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-opacity.svg2')}}></div>

## Stroke

객체의 테두리 색상을 CSS 색상명 또는 16진수 코드로 설정할 수 있습니다.

```d2
x -> y: hi {
  style: {
    stroke: deepskyblue
  }
}
# D2에서 '#'은 주석이기 때문에 16진수로 작성 시 따옴표가 필요합니다.
x.style.stroke: "#f4a261"
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-stroke.svg2')}}></div>

<br/>

`sql_table`과 `class`의 경우, `stroke`는 바디에 `fill`로 적용됩니다.
`fill`은 헤더의 `fill`을 설정하는 ​​데 사용되기 떄문입니다.

<div style={{width: "600px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-table-stroke.svg2')}}></div>

## Fill

객체의 내부 색상을 CSS 색상명 또는 16진수 코드로 설정할 수 있습니다.

```d2
x -> y: hi
x.style.fill: "#f4a261"
y.style.fill: honeydew
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-fill.svg2')}}></div>

<br/>

`sql_table` 및 `class`의 경우 `fill`이 헤더에 적용됩니다.

<div style={{width: "600px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-table-fill.svg2')}}></div>

투명함을 원한다면 다음과 같이 설정해줍시다.

```d2
x: {
  y
  y.style.fill: transparent
}
x.style.fill: PapayaWhip
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-fill-transparent.svg2')}}></div>

## Fill Pattern

객체의 내부를 특정 패턴으로 채웁니다.

사용 가능한 패턴:

- `dots`
- `lines`
- `grain`

(이 페이지에서 쓰인 테마에서는 `fill-pattern`이 어떻게 적용되는지 잘 보이지 않습니다.
[이 사이트](https://play.d2lang.com)에서 테스트해보세요.)

```d2
style.fill-pattern: dots
x -> y: hi
x.style.fill-pattern: lines
y.style.fill-pattern: grain
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-fill-pattern.svg2')}}></div>

## Stroke Width

Integer between `1` and `15`.
'1'과 '15' 사이의 정수입니다.

```d2
x -> y: hi {
  style: {
    stroke-width: 8
  }
}
x.style.stroke-width: 1
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-stroke-width.svg2')}}></div>

## Stroke Dash

Integer between `0` and `10`.
'0'과 '10' 사이의 정수입니다.

```d2
x -> y: hi {
  style: {
    stroke-dash: 3
  }
}
x.style.stroke-dash: 5
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-stroke-dash.svg2')}}></div>

## Border Radius

Integer between `0` and `20`.
'0'과 '20' 사이의 정수입니다.

```d2
x -> y: hi
x.style.border-radius: 3
y.style.border-radius: 8
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-border-radius.svg2')}}></div>

:::info
`border-radius` works on connections too, which controls how rounded the corners are.
This only applies to layout engines that use corners (e.g. ELK), and of course, only has effect on connections whose routes have corners.
`border-radius`는 연결에서도 작동하며 모서리가 얼마나 둥근지를 제어합니다.
이는 코너를 사용하는 레이아웃 엔진(예: ELK)에만 적용되며 물론 코너가 있는 경로의 연결에만 영향을 미칩니다.
:::

Specifying a very high value creates a "pill" effect.
매우 높은 값을 지정하면 "알약" 효과가 생성됩니다.

```d2
tylenol.style.border-radius: 999
```

<div style={{width: "200px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/pill.svg2')}}></div>

## Shadow

`true` or `false`.
'참' 또는 '거짓'.

```d2
x -> y: hi
x.style.shadow: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-shadow.svg2')}}></div>

## 3D

`true` or `false`.
'참' 또는 '거짓'.

```d2
x -> y: hi
x.style.3d: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-3d.svg2')}}></div>

## Multiple

`true` or `false`.
'참' 또는 '거짓'.

```d2
x -> y: hi
x.style.multiple: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-multiple.svg2')}}></div>

## Double Border

`true` or `false`.
'참' 또는 '거짓'.

```d2
x -> y: hi
x.style.double-border: true
y.shape: circle
y.style.double-border: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-double-border.svg2')}}></div>

## Font

Currently the only option is to specify `mono`. More coming soon.
현재 유일한 옵션은 'mono'를 지정하는 것입니다. 곧 더 많은 내용이 제공될 예정입니다.

```d2
x -> y: hi {
  style: {
    font: mono
  }
}
x.style.font: mono
y.style.font: mono
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-font.svg2')}}></div>

## Font Size

Integer between `8` and `100`.
'8'과 '100' 사이의 정수입니다.

```d2
x -> y: hi {
  style: {
    font-size: 28
  }
}
x.style.font-size: 8
y.style.font-size: 55
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-font-size.svg2')}}></div>

## Font Color

CSS color name or hex code.
CSS 색상 이름 또는 16진수 코드.

```d2
x -> y: hi {
  style: {
    font-color: red
  }
}
x.style.font-color: "#f4a261"
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-font-color.svg2')}}></div>

<br/>

For `sql_table`s and `class`es, `font-color` is applied to the header text only (theme controls other colors in the body).
`sql_table` 및 `class`의 경우 `font-color`는 헤더 텍스트에만 적용됩니다(테마는 본문의 다른 색상을 제어합니다).

<div style={{width: "600px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-table-color.svg2')}}></div>

## Animated

`true` or `false`.

```d2
x -> y: hi {
  style.animated: true
}
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-animated.svg2')}}></div>

## Bold, italic, underline

`true` or `false`.
'참' 또는 '거짓'.

```d2
x -> y: hi {
  style: {
    bold: true
  }
}
x.style.underline: true
y.style.italic: true
# By default, shape labels are bold. Bold has precedence over italic, so unbold to see
# italic style
y.style.bold: false
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-text-decoration.svg2')}}></div>

## Text transform

`text-transform` changes the casing of labels.
'text-transform'은 라벨의 대소문자를 변경합니다.

- `uppercase`
- `lowercase`
- `title`
- `none` (used for negating caps lock that special themes may apply)

```d2
x -> y: hi {
  style: {
    text-transform: capitalize
  }
}
x.style.text-transform: lowercase
y.style.text-transform: uppercase
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-text-transform.svg2')}}></div>

## Root

Some styles are applicable at the root level.
For example, to set a diagram background color, use `style.fill`.
일부 스타일은 루트 수준에서 적용 가능합니다.
예를 들어 다이어그램 배경색을 설정하려면 `style.fill`을 사용하세요.

Currently the set of supported keywords are:
현재 지원되는 키워드 세트는 다음과 같습니다.

- `fill`: diagram background color
- `fill-pattern`: background fill pattern
- `stroke`: frame around the diagram
- `stroke-width`
- `stroke-dash`
- `double-border`: two frames, which is a popular framing method

- `fill`: 다이어그램 배경색
- `fill-pattern`: 배경 채우기 패턴
- `stroke`: 다이어그램 주위의 프레임
- `stroke-width`
- `stroke-width`
- `double-border`: 두 개의 프레임으로 널리 사용되는 프레이밍 방법입니다.

```d2
x -> y: hi
style: {
  fill: LightBlue
  stroke: FireBrick
  stroke-width: 2
}
```

<div style={{width: "400px", margin: "20px auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-root.svg2')}}></div>

:::info
All diagrams in this documentation are rendered with `pad=0`.
If you're using `stroke` to create a frame for your diagram, you'll likely want to add some padding.
이 문서의 모든 다이어그램은 `pad=0`으로 렌더링됩니다.
다이어그램의 프레임을 생성하기 위해 '스트로크'를 사용하는 경우 패딩을 추가하고 싶을 것입니다.
:::
