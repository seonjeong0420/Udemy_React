# 섹션26. React Animation

**#알아두기** : vite 프로젝트여서 .jsx로 파일 구성 (.js는 안됨)

## How to Use
```javascript
<motion.dialog initial={{ opacity: 0, y: -30}} animate={{y: 0, opacity: 1}} exit={{ opacity: 0, y: 30 }} open className="modal">
```
- initial : 요소가 DOM에 추가된 직후 재생될 애니메이션의 초기 상태 정의 (=요소의 시작 상태를 정의)
- exit : 요소의 종료 상태를 정의

### Use - remove/hide
1. **exit** attribute 추가
2. 부모 컴포넌트에서 framer-motion에서 제공하는 **AnimatePresence 설정**이 필요

```javascript
// src/components/Header.jsx
import { AnimatePresence } from 'framer-motion';

<AnimatePresence>
 {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
</AnimatePresence>
```
*AnimationPresence: 어떤 요소에 애니메이션을 적용할 때, 정확히는 요소를 사라지게 하는 애니메이션을 적용할 때 조건에 따라 요소를 표시하거나 삭제하는 코드를 감싸는 wrapper로 사용*

### Use - button hover
```javascript
<motion.button
  whileHover={{ scale: 1.1 }}
  transition={{ type: 'spring', stiffness: 500, mass: 100 }}
  onClick={handleStartAddNewChallenge} className="button">
  Add Challenge
</motion.button>
```
버튼의 hover, focus, drag 등의 애니메이션을 주고 싶을 때 사용하는 속성
- whileHover
- whileDrag
- whileFocus

### Use - 상태 재사용
```javascript
// Modal.jsx & NewChallenge.jsx
<motion.dialog variants={{
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0}
}} initial="hidden" animate="visible" exit="hidden" open className="modal">
```
variants : 특정 애니메이션 상태를 정의하거나 재사용하는데 유용 (key: value)

### Use - list staggering
```javascript
// src/components/NewChallenge.jsx
<motion.ul id="new-challenge-images" variants={{
  visible: { transition: { staggerChildren: 0.05 } }
}}>
  {images.map((image) => (
    <motion.li
      variants={{
        hidden: { opacity: 0, scale: 0.5},
        visible: { opacity: 1, scale: [0.8, 1.3, 1]}
      }}              
      exit={{ opacity: 1, scale: 1}}
      transition={{type: 'sprint'}}
      key={image.alt}
      onClick={() => handleSelectImage(image)}
      className={selectedImage === image ? 'selected' : undefined}
    >
      <img {...image} />
    </motion.li>
  ))}
</motion.ul>
```
- staggering을 적용하고 싶은 요소의 부모 요소에 motion을 넣어야 한다.
- variants visible scale 값처럼 배열로 요소의 효과를 지정할 수가 있다.
  - 배열로 지정하면 keyframe으로 효과 주는 것이 가능하다.

### Use - useAnimate(명령적 접근법)
```javascript
// src/components/NewChallenge.jsx
// 1. setting
import { motion, useAnimate, stagger } from 'framer-motion';
const [scope, animate] = useAnimate();

// 2. 모션 설정
animate('input, textarea', { x: [-10, 0, 10, 0] }, {type: 'spring', duration: .2, delay: stagger(0.05)});

// 3. 모션이 적용되어야 할 DOM에 ref={scope} 데이터로 scope 넣게
<form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
```

### Use - 레이아웃 변화에 따른 애니메이션 적용
```javascript
// src/components/ChallengeItem.jsx
<motion.li layout></motion.li>
```
- layout : 레이아웃이 바뀔 때 모션을 준다.


```javascript
// src/components/Challenges.jsx
 <AnimatePresence mode="wait">
  {displayedChallenges.length > 0 && (
    <motion.ol key="list" exit={{y: -30, opacity: 0}} className="challenge-items">
      <AnimatePresence>
        {displayedChallenges.map((challenge) => (
          <ChallengeItem
            key={challenge.id}
            challenge={challenge}
            onViewDetails={() => handleViewDetails(challenge.id)}
            isExpanded={expanded === challenge.id}
          />
        ))}
      </AnimatePresence>
    </motion.ol>
  )}
  {displayedChallenges.length === 0 && <motion.p key="fallback" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -20}}>No challenges found.</motion.p>}
</AnimatePresence>

```
- AnimatePresence 안에 모션이 적용되어야 할 레이아웃이 2개 이상이라면, 각 요소마다 key 값을 부여해야 된다.
- mode : (기본값) sync
  - sync : 모든 모션을 동시에 처리
  - wait : 첫번째 요소가 사라지기를 기다린 후에 두번째 요소의 애니메이션 play


### Use - Menu Indicator
  ```javascript
  // src/components/ChallengeTabs.jsx

  {isSelected && <motion.div layoutId="tab-indicator" className="active-tab-indicator" />}
  <menu><li></li></menu>
  ```
- layoutId 값만 넣어주면 tab bar의 indicator 모션을 자연스럽게 줄 수가 있다.


### Use - Parallax Scroll
```javascript
// src/pages/Welcome.jsx

import { motion, useScroll, useTransform } from 'framer-motion';

export default function WelcomePage() {
  const { scrollY } = useScroll();
  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

  <header id="welcome-header">
    <motion.div id="welcome-header-content">
      <h1>Ready for a challenge?</h1>
      <Link id="cta-link" to="/challenges">
        Get Started
      </Link>
    </motion.div>
    <motion.img
      style={{ opacity: opacityCity, y: yCity }}
      src={cityImg}
      alt="A city skyline touched by sunlight"
      id="city-image"
    />
    <motion.img src={heroImg} alt="A superhero wearing a cape" id="hero-image" />
  </header>
}
```
- useTransform(scroll 영역, [스크롤 위치], [스크롤 위치에 따른 스타일 지정])
