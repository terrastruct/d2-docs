import CodeBlock from '@theme/CodeBlock';
import StylesOpacity from '@site/static/d2/styles-opacity.d2';
import StylesStroke from '@site/static/d2/styles-stroke.d2';
import StylesFill from '@site/static/d2/styles-fill.d2';
import StylesFillTransparent from '@site/static/d2/styles-fill-transparent.d2';
import StylesFillPattern from '@site/static/d2/styles-fill-pattern.d2';
import StylesStrokeWidth from '@site/static/d2/styles-stroke-width.d2';
import StylesStrokeDash from '@site/static/d2/styles-stroke-dash.d2';
import StylesBorderRadius from '@site/static/d2/styles-border-radius.d2';
import Pill from '@site/static/d2/pill.d2';
import StylesShadow from '@site/static/d2/styles-shadow.d2';
import Styles3d from '@site/static/d2/styles-3d.d2';
import StylesMultiple from '@site/static/d2/styles-multiple.d2';
import StylesDoubleBorder from '@site/static/d2/styles-double-border.d2';
import StylesFont from '@site/static/d2/styles-font.d2';
import StylesFontSize from '@site/static/d2/styles-font-size.d2';
import StylesFontColor from '@site/static/d2/styles-font-color.d2';
import StylesTableColor from '@site/static/d2/styles-table-color.d2';
import StylesAnimated from '@site/static/d2/styles-animated.d2';
import StylesTextDecoration from '@site/static/d2/styles-text-decoration.d2';
import StylesTextTransform from '@site/static/d2/styles-text-transform.d2';
import StylesRoot from '@site/static/d2/styles-root.d2';

# 스타일

도형의 스타일은 `style` 필드 아래에서 다음 예약 키워드들로 설정합니다.

아래에 소개될 것들은 이 기본 다이어그램들에 개별적으로 적용되는 모든 유효한 스타일의 카탈로그입니다.

<div style={{width: "400px", margin: "20px auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-base.svg2')}}></div>

:::note
이번 챕터의 SVG 이미지들은 `direction: right`으로 렌더링되지만 간결성을 위해 스크립트에서는 생략되었습니다.
:::

## Style keywords

- [opacity](#opacity)
- [stroke](#stroke)
- [fill](#fill) (도형에만 적용됨)
- [fill-pattern](#fill-pattern) (도형에만 적용됨)
- [stroke-width](#stroke-width)
- [stroke-dash](#stroke-dash)
- [border-radius](#border-radius)
- [shadow](#shadow) (도형에만 적용됨)
- [3D](#3d) (직사각형/사각형에만 적용됨)
- [multiple](#multiple) (도형에만 적용됨)
- [double-border](#double-border) (직사각형/타원에만 적용됨)
- [font](#font)
- [font-size](#font-size)
- [font-color](#font-color)
- [animated](#animated) (연결에만 적용됨)
- [bold, italic, underline](#bold-italic-underline)
- [text-transform](#text-transform)
- [root](#root)

## Opacity

객체의 투명도를 `0`과 `1` 사이의 값으로 설정합니다.

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

객체의 테두리 색상을 CSS 색상명 또는 16진수 코드로 설정합니다.

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

객체의 내부 색상을 CSS 색상명 또는 16진수 코드로 설정합니다.

```d2
x -> y: hi
x.style.fill: "#f4a261"
y.style.fill: honeydew
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-fill.svg2')}}></div>

<br/>

`sql_table` 및 `class`의 경우 `fill`이 헤더에 적용됩니다.

<div style={{width: "600px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-table-fill.svg2')}}></div>

투명함을 원한다면 다음과 같이 설정해주세요.

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

객체의 테두리 두께를 `1`과 `15` 사이의 정수로 설정합니다.

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

객체의 테두리를 파선으로 만듭니다.
`0`과 `10` 사이의 정수로 파선 내의 선 간격을 설정합니다.

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

객체의 테두리 모서리 곡률을 `0`과 `20` 사이의 정수로 설정합니다.

```d2
x -> y: hi
x.style.border-radius: 3
y.style.border-radius: 8
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-border-radius.svg2')}}></div>

:::info
연결에 "코너"가 적용되는 레이아웃 엔진(예: ELK)의 경우, `border-radius`는 연결에도 적용할 수 있습니다.
:::

매우 높은 값으로 설정할 경우 도형이 알약 형태가 됩니다.

```d2
tylenol.style.border-radius: 999
```

<div style={{width: "200px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/pill.svg2')}}></div>

## Shadow

`true`, `false`로 그림자를 설정합니다.

```d2
x -> y: hi
x.style.shadow: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-shadow.svg2')}}></div>

## 3D

`true`, `false`로 3D 효과를 설정합니다.

```d2
x -> y: hi
x.style.3d: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-3d.svg2')}}></div>

## Multiple

`true`, `false`로 객체를 여러 개가 겹쳐진 형태로 설정합니다.

```d2
x -> y: hi
x.style.multiple: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-multiple.svg2')}}></div>

## Double Border

`true`, `false`로 객체의 테두리를 쌍테두리로 설정합니다.

```d2
x -> y: hi
x.style.double-border: true
y.shape: circle
y.style.double-border: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-double-border.svg2')}}></div>

## Font

객체 내 글씨체를 설정합니다.
현재 존재하는 글씨체 옵션은 `mono` 뿐입니다.
앞으로 있을 업데이트를 기대해주세요.

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

객체 내 글씨체 크기를 `8`과 `100` 사이의 정수로 설정합니다.

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

객체 내 글씨체 색상을 CSS 색상 이름 또는 16진수 코드로 설정합니다.

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

`sql_table` 및 `class`의 경우 `font-color`는 헤더 텍스트에만 적용됩니다(테마는 바디의 내의 색상을 제어합니다).

<div style={{width: "600px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-table-color.svg2')}}></div>

## Animated

`true`, `false`로 애니메이션 효과를 설정합니다.

```d2
x -> y: hi {
  style.animated: true
}
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-animated.svg2')}}></div>

## Bold, italic, underline

`true`, `false`로 텍스트 형태를 설정합니다.

```d2
x -> y: hi {
  style: {
    bold: true
  }
}
x.style.underline: true
y.style.italic: true
# By default, shape labels are bold. Bold has precedence over italic, so unbold to see italic style
# 기본적으로 도형 레이블은 볼드체로 표시됩니다.
# 볼드체는 이탤릭체보다 우선 순위가 높으니, 이탤릭체를 적용하고 싶다면 볼드체 설정을 끄세요.
y.style.bold: false
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-text-decoration.svg2')}}></div>

## Text transform

`text-transform`은 레이블의 대소문자를 변환합니다.

- `uppercase`
- `lowercase`
- `title`
- `none` (특수 테마가 적용됐을 경우 적용되는 대문자화를 무효화하는 데 사용됩니다.)

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

일부 스타일은 전체 범위(root level)에서 적용 가능합니다.
예를 들어 다이어그램의 배경색을 설정하려면 `style.fill`을 사용하세요.

현재 지원되는 키워드 세트는 다음과 같습니다.

- `fill`: 다이어그램 배경색
- `fill-pattern`: 배경 패턴
- `stroke`: 다이어그램 프레임
- `stroke-width`
- `stroke-dash`
- `double-border`

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
이 문서의 모든 다이어그램은 `pad=0`으로 렌더링됩니다.
:::
