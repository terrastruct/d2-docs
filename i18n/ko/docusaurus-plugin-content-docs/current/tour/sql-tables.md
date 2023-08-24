# SQL 테이블

## 기본

D2에서 셰이프를 `sql_table`로 설정한다면 계체-관계 다이어그램(ERD)을 쉽게 나타낼 수 있습니다.
다음은 기본적인 예시입니다.

```d2
my_table: {
  shape: sql_table
  # 여기서 제약 조건(constraint)의 타입은 컨테이너 문서에서 설명한 약식 정의 방식으로 정의됩니다.
  # id 필드는 다음과 같은 셰이프로 매핑됩니다. {type: int; constraint: primary_key}
  id: int {constraint: primary_key}
  last_updated: timestamp with time zone
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-1.svg2')}}></div>

SQL 테이블 셰이프에서 각 키는 행을 정의합니다.
각 행의 콜론 다음에 오는 기본 값은 해당 값의 타입을 정의합니다.

각 행의 제약 조건은 해당 SQL 제약 조건을 정의하며, D2는 그걸 인식하고 다음과 같이 축약하여 표시합니다.

| constraint  | short |
| ----------- | ----- |
| primary_key | PK    |
| foreign_key | FK    |
| unique      | UNQ   |

그러나 위의 제약 조건 이외에도 다른 제약 조건들을 설정할 수 있습니다.
하지만 D2에서 인식할 수 없다면 축약되지 않습니다.

:::info
배열을 사용하여 여러 제약 조건을 지정할 수도 있습니다.

```d2
x: int { constraint: [primary_key; unique] }
```

:::

## 외래 키(Foreign Keys)

다음은 두 테이블 간의 외래 키에 대한 커넥션을 정의하는 방법에 대한 예시입니다.

```d2
objects: {
  shape: sql_table
  id: int {constraint: primary_key}
  disk: int {constraint: foreign_key}

  json: jsonb  {constraint: unique}
  last_updated: timestamp with time zone
}

disks: {
  shape: sql_table
  id: int {constraint: primary_key}
}

objects.disk -> disks.id
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-2.svg2')}}></div>

커서를 기본 키 또는 외래 키 위로 가져가면 해당 키가 강조 표시됩니다.

:::info
[TALA 레이아웃 엔진](/tour/tala)으로 렌더링하면 해당 행으로부터 직접적으로 연결됩니다.
:::

## 예시

다른 모든 셰이프와 마찬가지로 `sql_tables`를 컨테이너 안에 중첩하고 다른 셰이프를 정의해 연결할 수 있습니다. 예를 들면 다음과 같습니다.

```d2
cloud: {
  disks: {
    shape: sql_table
    id: int {constraint: primary_key}
  }
  blocks: {
    shape: sql_table
    id: int {constraint: primary_key}
    disk: int {constraint: foreign_key}
    blob: blob
  }
  blocks.disk -> disks.id

  AWS S3 Vancouver -> disks
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-3.svg2')}}></div>
