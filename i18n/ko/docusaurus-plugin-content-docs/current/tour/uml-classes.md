import CodeBlock from '@theme/CodeBlock';
import Classes1 from '@site/static/d2/classes-1.d2';
import Classes2 from '@site/static/d2/classes-2.d2';

# UML 클래스

## 기본

D2는 UML 클래스 다이어그램을 완벽하게 지원합니다.
다음은 기본적인 예시입니다.

```d2
MyClass: {
  shape: class

  field: "[]string"
  method(a uint64): (x, y int)
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-1.svg2')}}></div>

`class` 셰이프의 각 키들은 필드 또는 메서드를 정의합니다.

필드 키의 값은 필드의 타입을 의미합니다.

`(`를 포함하는 모든 키는 메서드이며, 값은 반환값의 타입을 의미합니다.

값이 없는 메소드 키의 반환 타입은 void입니다.

## 가시성(Visibility)

UML 스타일의 접근 제어자를 사용하여 필드/메서드에 대한 가시성을 나타낼 수도 있습니다.

| 가시성 접근 제어자 |   의미    |
| :----------------: | :-------: |
|        none        |  public   |
|         +          |  public   |
|         -          |  private  |
|         #          | protected |

https://www.uml-diagrams.org/visibility.html을 참조하세요.

다음은 다양한 가시성과 더 복잡한 타입들에 대한 예시입니다.

```d2
D2 Parser: {
  shape: class

  # 기본 가시성은 + 이므로 명시하지 않아도 됩니다.
  +reader: io.RuneReader
  readerPos: d2ast.Position

  # Private field.
  -lookahead: "[]rune"

  # Protected field.
  # 해당 행이 주석으로 구문 분석되는 것을 방지하려면 #를 탈출문자로 처리해야 합니다.
  \#lookaheadPos: d2ast.Position

  +peek(): (r rune, eof bool)
  rewind()
  commit()

  \#peekn(n int): (s string, eof bool)
}

"github.com/terrastruct/d2parser.git" -> D2 Parser
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-2.svg2')}}></div>
