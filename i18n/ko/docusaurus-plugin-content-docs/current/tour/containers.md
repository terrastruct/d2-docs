# 컨테이너(Containers)

```d2
server
# 도형 안에 도형을 선언
server.process

# 컨테이너와 자식을 동시에 선언할 수 있습니다.
im a parent.im a child

# 연결도 키를 선언할 수 있으므로 아래와 같은 것도 가능합니다.
apartment.Bedroom.Bathroom -> office.Spare Room.Bathroom: Portal
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-1.svg2')}}></div>

## 중첩 구문

중첩 구문을 통해 중첩 맵을 생성하면 컨테이너를 반복적으로 작성하지 않아도 됩니다.

```d2
clouds: {
  aws: {
    load_balancer -> api
    api -> db
  }
  gcloud: {
    auth -> db
  }

  gcloud -> aws
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-2.svg2')}}></div>

## 컨테이너 라벨

컨테이너 라벨을 정의하는 방법에는 두 가지가 있습니다.

### 1. 약식 정의

```d2
gcloud: Google Cloud {
  ...
}
```

### 2. 예약된 키워드 `label`을 사용하는 방법

```d2
gcloud: {
  label: Google Cloud
  ...
}
```

## 예시

```d2
clouds: {
  aws: AWS {
    load_balancer -> api
    api -> db
  }
  gcloud: Google Cloud {
    auth -> db
  }

  gcloud -> aws
}

users -> clouds.aws.load_balancer
users -> clouds.gcloud.auth

ci.deploys -> clouds
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-3.svg2')}}></div>

## 부모 참조

Sometimes you want to reference something outside of the container from within. The underscore (`_`) refers to parent.
내부에서 컨테이너 외부의 무언가를 참조하고 싶을 때 사용합니다.
언더바 기호(`_`)로 외부의 다른 부모 컨테이너를 참조하고 있다는 것을 나타냅니다.

```d2
christmas: {
  presents
}
birthdays: {
  presents
  _.christmas.presents -> presents: regift
  _.christmas.style.fill: "#ACE1AF"
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-underscore.svg2')}}></div>
