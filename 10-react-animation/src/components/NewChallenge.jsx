import { useContext, useRef, useState } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';

import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [scope, animate] = useAnimate();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      animate('input, textarea', { x: [-10, 0, 10, 0] }, {type: 'spring', duration: .2, delay: stagger(0.05)});
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

      {/*
      exit을 visible로 설정해서 리스트 항목을 오버라이드 해줘야한다.
      Modal.jsx에서 설정한 exit와 중첩이 되어서 리스트 항목은 exit 상태로 들어갈 때 활성화 되는 variant를 오버라이드 해주는 것이다.
      즉, 라스트 항목이 exit 될 때 애니메이션이 플레이 되지 않도록 설정하는 것이다.
      */}
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

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
