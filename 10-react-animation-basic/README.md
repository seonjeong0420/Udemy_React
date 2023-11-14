# 섹션26. React Animation - Framer
- framer를 사용해서 애니메이션 넣는 방법에 대한 강의

**알아두기**
vite 프로젝트여서 .jsx로 파일 구성 (.js는 안됨)

```bash
npm install framer-motion
```
- 성능이 뛰어난 애니메이션
- 컴포넌트 재렌더링, 애플리케이션 속도 저하 없이 가능한 최대 성능을 보여준다.

## How to Use
```javascript
import {motion} from 'framer-motion';
<motion.div id="box" animate={{ x: x, y: y, rotate: rotate }} transition={{ duration: 3, type: 'spring' }} />
```
- transition
type : (default) spring / tween / etc
bound : 모션이 튕기는 정도
duration : 모션의 재생 속도