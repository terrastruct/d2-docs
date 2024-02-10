import CodeBlock from '@theme/CodeBlock';
import SequenceDiagrams1 from '@site/static/d2/sequence-diagrams-1.d2';
import SequenceDiagrams2 from '@site/static/d2/sequence-diagrams-2.d2';
import SequenceDiagrams3 from '@site/static/d2/sequence-diagrams-3.d2';
import SequenceDiagrams4 from '@site/static/d2/sequence-diagrams-4.d2';
import SequenceDiagramsScope from '@site/static/d2/sequence-diagrams-scope.d2';
import SequenceDiagramsGroup from '@site/static/d2/sequence-diagrams-group.d2';
import SequenceDiagramsNote from '@site/static/d2/sequence-diagrams-note.d2';
import SequenceDiagramsSelf from '@site/static/d2/sequence-diagrams-self.d2';
import SequenceDiagramsLifeline from '@site/static/d2/sequence-diagrams-lifeline.d2';

# 시퀀스 다이어그램

시퀀스 다이어그램은 객체에 `shape: sequence_diagram`을 설정해 생성할 수 있습니다.

```d2
shape: sequence_diagram
alice -> bob: What does it mean\nto be well-adjusted?
bob -> alice: The ability to play bridge or\ngolf as if they were games.
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-1.svg2')}}></div>

## 규칙

다른 도구들과는 달리 시퀀스 다이어그램을 학습하기 위한 특별한 구문은 없습니다.
규칙은 D2의 다른 모든 규칙과 거의 동일하지만 두 가지 눈에 띄는 차이점이 있습니다.

### 범위

시퀀스 다이어그램의 하위 항목은 해당 시퀀스 다이어그램 전체에서 동일한 범위를 공유합니다.

For example:

```d2
Office chatter: {
  shape: sequence_diagram

  alice: Alice
  bob: Bobby

  awkward small talk: {
    alice -> bob: uhm, hi
    bob -> alice: oh, hello

    icebreaker attempt: {
      alice -> bob: what did you have for lunch?
    }

    unfortunate outcome: {
      bob -> alice: that's personal
    }
  }
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-scope.svg2')}}></div>

시퀀스 다이어그램 외부에서는 서로 다른 컨테이너 범위를 갖기 때문에 `alice`와 `bob`의 인스턴스가 여러 개 있을 수 있습니다.
그러나 `shape: sequence_diagram` 아래에 중첩되면 동일한 `alice`와 `bob`을 참조합니다.

### 순서

앞에서 살펴봤던 D2로 나타낼 수 있는 여러 다이어그램들에서는 순서라는 개념이 없었습니다.
또한, 연결을 차례대로 정의하는 경우 나중에 그것이 순서대로 표시될 것이란 보장도 없었습니다.
그러나 시퀀스 다이어그램에서는 순서가 중요합니다.
모든 것들은 정의하는 순서대로 표시됩니다.

**액터(Actor)** 또한 정의 시 이 순서에 영향을 받습니다.
액터를 명시적으로 정의할 필요는 없지만(그룹에 처음 나타나는 경우 제외) 특정 순서를 정의하고자 한다면 그렇게 해야 합니다.

```d2
shape: sequence_diagram

# 세미콜론을 사용해서 한 줄에 여러 개체를 정의할 수 있다는 점을 잊지마세요.
# 액터는 왼쪽에서 오른쪽으로 a, b, c, d...로 나타납니다.

a; b; c; d

# 연결 순서가 달라도 액터의 순서는 영향을 받지 않습니다.

c -> d
d -> a
b -> d
```

:::info
액터는 **"participant"**라고도 불립니다.
:::

## 기능

### 시퀀스 다이어그램은 D2 객체입니다.

시퀀스 다이어그램은 어딘가에 속하거나, 연결하거나, 라벨을 재지정하거나, 스타일을 재지정하는 등, D2의 다른 객체들처럼 취급됩니다.

```d2
direction: right

Before and after becoming friends: {
  2007: Office chatter in 2007 {
    shape: sequence_diagram

    alice: Alice
    bob: Bobby

    awkward small talk: {
      alice -> bob: uhm, hi
      bob -> alice: oh, hello

      icebreaker attempt: {
        alice -> bob: what did you have for lunch?
      }

      unfortunate outcome: {
        bob -> alice: that's personal
      }
    }
  }

  2012: Office chatter in 2012 {
    shape: sequence_diagram

    alice: Alice
    bob: Bobby

    alice -> bob: Want to play with ChatGPT?
    bob -> alice: Yes!
    bob -> alice.play: Write a play...

    alice.play -> bob.play: about 2 friends...
    bob.play -> alice.play: who find love...
    alice.play -> bob.play: in a sequence diagram
  }

  2007 -> 2012: Five\nyears\nlater
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-2.svg2')}}></div>

### 스팬(Spans)

스팬은 시퀀스 다이어그램 내 상호 작용의 시작과 끝을 전달합니다.

:::info
D2의 스팬은 **"fragment", "edge group",또는 "frame"**이라고도 합니다.
:::

액터에 중첩된 개체를 연결하여 스팬을 지정할 수 있습니다.

```d2
shape: sequence_diagram

alice.t1 -> bob
alice.t2 -> bob.a
alice.t2.a -> bob.a
alice.t2.a <- bob.a
alice.t2 <- bob.a
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-3.svg2')}}></div>

### 그룹(Groups)

그룹은 시퀀스 다이어그램의 하위 집합을 라벨링 할 때 좋습니다.

:::info
D2의 그룹은 다른 곳에서는 "fragment", "edge group" 및 "프레임"라고도 합니다.
:::

범위 지정 규칙을 설명할 때의 예시에서 이에 대한 예시가 이미 나왔습니다.
확실히 해두자면, 그룹은 어떤 것에도 연결되지 않고 내부에 연결이나 개체가 있는 `sequence_diagram` 모양 내의 컨테이너입니다.

```d2
shape: sequence_diagram

# 액터 정의
alice; bob

shower thoughts: {
  alice -> bob: A physicist is an atom's way of knowing about atoms.
  alice -> bob: Today is the first day of the rest of your life.
}

life advice: {
  bob -> alice: If all else fails, lower your standards.
}
```

:::caution
시퀀스 다이어그램의 고유한 범위 지정 규칙으로 인해 그룹 내에서 연결되는 개체들은 최상위 스코프에 존재해야 합니다.
따라서 위의 예시에서 `alice`와 `bob`은 그룹 선언 전에 명시적으로 선언되었습니다.
:::

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-group.svg2')}}></div>

### 메모(Notes)

메모는 연결되지 않은 액터에 중첩된 개체를 정의하여 선언됩니다.

```d2
shape: sequence_diagram

alice -> bob

bob."In the eyes of my dog, I'm a man."

# 메모도 그룹으로 묶을 수 있습니다.
important insight: {
  bob."Cold hands, no gloves."
}

bob -> alice: Chocolate chip.
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-note.svg2')}}></div>

### 셀프 메세지

자기 참조 메시지는 액터 스스로에게 선언될 수 있습니다.

```d2
shape: sequence_diagram

son -> father: Can I borrow your car?
friend -> father: Never lend your car to anyone to whom you have given birth.

father -> father: internal debate ensues
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-self.svg2')}}></div>

### 커스텀

다른 경우와 마찬가지로 셰이프의 형태와 연결의 스타일을 지정할 수 있습니다.
여기서는 일부 메시지에 점선을 표시하고 액터의 모양을 설정합니다.

```d2
shape: sequence_diagram
scorer: { shape: person }
scorer.t -> itemResponse.t: getItem()
scorer.t <- itemResponse.t: item {
    style.stroke-dash: 5
}

scorer.t -> item.t1: getRubric()
scorer.t <- item.t1: rubric {
    style.stroke-dash: 5
}

scorer.t -> essayRubric.t: applyTo(essayResp)
itemResponse -> essayRubric.t.c
essayRubric.t.c -> concept.t: match(essayResponse)
scorer <- essayRubric.t: score {
    style.stroke-dash: 5
}

scorer.t -> itemOutcome.t1: new
scorer.t -> item.t2: getNormalMinimum()
scorer.t -> item.t3: getNormalMaximum()

scorer.t -> itemOutcome.t2: setScore(score)
scorer.t -> itemOutcome.t3: setFeedback(missingConcepts)

```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-4.svg2')}}></div>

위에서 아래로 떨어지고 있는 **라이프라인(Lifeline)**은 액터의 `stroke` 및 `stroke-dash` 스타일을 상속받습니다.

```d2
shape: sequence_diagram

alice -> bob: What does it mean\nto be well-adjusted?
bob -> alice: The ability to play bridge or\ngolf as if they were games.

alice.style: {
  stroke: red
  stroke-dash: 0
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-lifeline.svg2')}}></div>

## 용어 정리

<img src={require('@site/static/img/screenshots/sequence_glossary.png').default}
alt="sequence diagram glossary"/>
