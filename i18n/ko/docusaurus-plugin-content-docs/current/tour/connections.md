# 연결(Connections)

연결은 도형 간의 관계를 정의합니다.

## 기본

도형 사이의 하이픈 또는 화살표는 연결을 정의합니다.

```d2
Write Replica Canada <-> Write Replica Australia

Read Replica <- Master
Write Replica -> Master

Read Replica 1 -- Read Replica 2
```

연결에서 선언되지 않은 도형을 참조하는 경우 해당 도형이 새로 생성됩니다([hello world](hello-world.md)에서 확인 가능).

:::info
4가지 방법으로 연결을 정의할 수 있습니다.

- `--`
- `->`
- `<-`
- `<->`

:::

### 연결 레이블(Connections labels)

```d2
Read Replica 1 -- Read Replica 2: Kept in sync
```

### 연결 시 레이블이 아닌 도형의 키를 참조해야 합니다.

```d2
be: Backend
fe: Frontend

# 새로운 도형이 생성됩니다
Backend -> Frontend

# 기본 레이블(키)에 대한 연결을 정의합니다.
be -> fe
```

## 예시

```d2
Write Replica Canada <-> Write Replica Australia

Read Replica <- Master

x -- y

super long shape id here --\
  -> super long shape id even longer here
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-1.svg2')}}></div>

## 반복 연결(Repeated connections)

반복된 연결 선언은 기존 연결을 재정의하지 않습니다.
대신 새로운 연결이 생성됩니다.

```d2
Database -> S3: backup
Database -> S3
Database -> S3: backup
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-2.svg2')}}></div>

## 연결 체이닝(Connection chaining)

가독성을 위해, 한 줄에 여러 연결을 정의하는 것이 더 자연스럽게 보일 수 있습니다.

```d2
# 레이블은 연결 체인의 각 연결에 적용됩니다.
High Mem Instance -> EC2 <- High CPU Instance: Hosted By
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-3.svg2')}}></div>

## 사이클도 가능합니다

```d2
Stage One -> Stage Two -> Stage Three -> Stage Four
Stage Four -> Stage One: repeat
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-4.svg2')}}></div>

## 화살표 머리(Arrowheads)

기본 화살표 머리의 모양을 재정의하거나 화살표 머리 옆에 레이블을 지정하려면 `source-arrowhead` 또는 `target-arrowhead`라는 속성을 사용해 정의합니다.

```d2
a: The best way to avoid responsibility is to say, "I've got responsibilities"
b: Whether weary or unweary, O man, do not rest
c: I still maintain the point that designing a monolithic kernel in 1991 is a

a -> b: To err is human, to moo bovine {
  source-arrowhead: 1
  target-arrowhead: * {
    shape: diamond
  }
}

b <-> c: "Reality is just a crutch for people who can't handle science fiction" {
  source-arrowhead.label: 1
  target-arrowhead: * {
    shape: diamond
    style.filled: true
  }
}

d: A black cat crossing your path signifies that the animal is going somewhere

d -> a -> c
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-5.svg2')}}></div>

:::info 화살표 머리 옵션

- `triangle` (기본)
- `arrow` (`triangle`과 비슷하지만 더 뾰족함)
- `diamond`
  - `style.filled: true`와 같이 추가 스타일 지정 가능.
- `circle`
  - `style.filled: true`와 같이 추가 스타일 지정 가능.
- `cf-one`, `cf-one-required` ("cf"는 "crows foot"의 약자)
- `cf-many`, `cf-many-required`

:::

:::info
화살표 머리의 레이블은 짧게 하는 것이 좋습니다.
일반 레이블처럼 최적의 위치 지정을 위해 자동 레이아웃이 이뤄지지 않으므로 레이블이 길 경우 주변 개체와 충돌할 가능성이 큽니다.
:::

:::caution
화살표 머리 속성 부여 시 연결 내에 해당하는 화살표 머리가 존재하지 않는다면 아무 작업도 수행하지 않습니다.
다음 예시의 경우, 출발점에 화살표 머리가 없기 때문에 아무 작업도 수행하지 않습니다.

```d2
x -> y: {
  source-arrowhead.shape: diamond
}
```

:::

## 연결 참조(Referencing connections)

원래 ID 뒤에 인덱스를 지정하여 연결을 참조할 수 있습니다.

```d2
x -> y: hi
x -> y: hello

(x -> y)[0].style.stroke: red
(x -> y)[1].style.stroke: blue
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-reference.svg2')}}></div>
