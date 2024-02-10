---
pagination_next: tour/style
---

import CodeBlock from '@theme/CodeBlock';
import TerminalTheme from '@site/static/bespoke-d2/terminal-theme.d2';

# 테마

D2에는 당신의 다이어그램을 블로그나 위키에 삽입할 수 있도록 고급스럽고 전문적으로 보일 수 있도록 하는 다양한 테마가 있습니다.

<img width={700} src={require('@site/static/img/screenshots/themes/theme_overview.png').default} alt="D2 theme choices"/>
<img width={400} src={require('@site/static/img/screenshots/themes/theme_2.png').default} alt="mixed berry blue theme"/>
<img width={400} src={require('@site/static/img/screenshots/themes/theme_3.png').default} alt="vanilla nitro cola theme"/>

### 테이블과 같은 특별한 도형에도 적용됩니다.

# "Grape soda" 테마 적용

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/theme-table.svg2')}}></div>

# "Vanilla nitro cola" 테마 적용

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/theme-table-2.svg2')}}></div>

## CLI에서 테마 설정하기

사용할 테마를 지정하려면 `-t, --theme` 플래그를 설정할 수 있습니다.

```shell
d2 -t 101 input.d2
```

환경 변수를 사용할 수도 있습니다.

```shell
D2_THEME=101 d2 input.d2
```

사용 가능한 테마를 확인하려면 다음 코드를 실행하세요.

```shell
d2 themes
```

## 어두운 테마

어두운 테마는 기본 설정이 아니기 때문에 사용자의 시스템 기본 설정과 상관없이 다이어그램이 동일하게 보입니다.

:::info
이 문서의 모든 다이어그램에는 어두운 테마가 있습니다.
시스템 기본 설정의 테마를 바꿀 때 어떻게 변하는지 확인해 보세요.
:::

사용자의 시스템 기본 설정이 어두운 테마일 경우 다이어그램을 어두운 테마로 변하게 하려면 다음과 같이 플래그를 지정하면 됩니다.

```shell
d2 --dark-theme 200 input.d2
```

일반 테마와 마찬가지로 환경 변수를 사용하여 설정할 수도 있습니다.

```shell
D2_DARK_THEME=200 d2 input.d2
```

:::info
테마는 밝은 테마와 어두운 테마로 별도로 분류되어 있지만, 어두운 테마 ID를 `theme` 에 전달하여 다이어그램이 항상 어둡게 표시되도록 할 수 있습니다.
:::

어두운 테마를 적용했을 때의 예시입니다.(이것은 SVG가 아닌 이미지이므로 시스템 기본 설정에 따라 변경되지 않습니다).
<img width={600} src={require('@site/static/img/screenshots/themes/dark.png').default} alt="dark theme"/>

## 특수 테마

어떤 특별한 테마의 경우 단순히 색상이 바뀌는 것 이상의 효과가 적용됩니다.

예를 들어 `Terminal` 테마를 적용하면 다음 속성들이 기본값으로 설정됩니다.

- 모든 레이블이 대문자로 표기됩니다.
- 테두리가 둥글지 않습니다.
- 글꼴의 폭이 고정됩니다.
- 모든 컨테이너에 대해 `fill-pattern`이 `dots`으로 설정됩니다.
- 대부분의 외부 컨테이너에는 `double-border`가 `true`로 설정됩니다.

<div style={{width: "100%", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/terminal-theme.svg2')}}></div>

ELK 엔진으로 렌더링된 위 다이어그램의 소스 코드는 다음과 같습니다.
특수 테마는 다른 기본값을 사용하기 때문에 레이블의 대소문자 적용 여부와 같은 다이어그램에 표시된 많은 속성들이 소스에 표시되지 않습니다.

```d2
network: {
  cell tower: {
    satellites: {
      shape: stored_data
      style.multiple: true
    }

    transmitter

    satellites -> transmitter: send
    satellites -> transmitter: send
    satellites -> transmitter: send
  }

  online portal: {
    ui: {shape: hexagon}
  }

  data processor: {
    storage: {
      shape: cylinder
      style.multiple: true
    }
  }

  cell tower.transmitter -> data processor.storage: phone logs
}

user: {
  shape: person
  width: 130
}

user -> network.cell tower: make call
user -> network.online portal.ui: access {
  style.stroke-dash: 3
}

api server -> network.online portal.ui: display
api server -> logs: persist
logs: {shape: page; style.multiple: true}

network.data processor -> api server
```
