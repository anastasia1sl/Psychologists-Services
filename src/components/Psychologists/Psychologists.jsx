import css from "./Psychologists.module.css";
import PsychologistsList from "./PsychologistsList/Psychologists";

import { useState, useMemo } from "react";

const cardDefault = 3;

function Psychologists({ psychologists }) {
  const [visibleCards, setVisibleCards] = useState(cardDefault);

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => prevCount + cardDefault);
  };

  const hasMore = useMemo(
    () => visibleCards < psychologists.length,
    [visibleCards, psychologists.length]
  );

  const visiblePsychologists = useMemo(() => {
    return psychologists.slice(0, visibleCards);
  }, [psychologists, visibleCards]);

  return (
    <div className={css.content}>
      {psychologists && psychologists.length > 0 ? (
        <PsychologistsList psychologists={visiblePsychologists} />
      ) : (
        <p>No data found</p>
      )}
      {hasMore && (
        <button onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
}
export default Psychologists;
