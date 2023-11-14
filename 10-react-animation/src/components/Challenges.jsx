import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ChallengesContext } from '../store/challenges-context.jsx';
import ChallengeItem from './ChallengeItem.jsx';
import ChallengeTabs from './ChallengeTabs.jsx';

export default function Challenges() {
  const { challenges } = useContext(ChallengesContext);
  const [selectedType, setSelectedType] = useState('active');
  const [expanded, setExpanded] = useState(null);

  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  function handleViewDetails(id) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  const filteredChallenges = {
    active: challenges.filter((challenge) => challenge.status === 'active'),
    completed: challenges.filter(
      (challenge) => challenge.status === 'completed'
    ),
    failed: challenges.filter((challenge) => challenge.status === 'failed'),
  };

  const displayedChallenges = filteredChallenges[selectedType];

  return (
    <div id="challenges">
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        {/* 
        전체에 AnimatePresence 와 motion.ol이 필요한 경우
        1. displayedChallenges 배열이 0이 되면 DOM에서 삭제되므로 마지막 리스트를 삭제할 경우 애니메이션이 적용이 안된다.
        2. 따라서 AnimatePresence을 감싼 레이아웃 부모 요소를 한번 더 AnimatePresence로 감싸고, ol 요소에 motion을 추가해서 exit 데이터를 적용해야 된다.
        */}
        <AnimatePresence mode="wait">
          {displayedChallenges.length > 0 && (
            <motion.ol key="list" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} exit={{y: -30, opacity: 0}} className="challenge-items">
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
      </ChallengeTabs>
    </div>
  );
}
