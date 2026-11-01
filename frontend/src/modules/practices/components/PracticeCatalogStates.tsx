export function PracticeCatalogLoading() {
  return (
    <div className="practiceGrid" aria-label="Загрузка практик" aria-busy="true">
      {Array.from({ length: 6 }, (_, index) => (
        <div className="practiceCard practiceSkeleton" key={index} aria-hidden="true">
          <div className="skeletonLine skeletonMeta" />
          <div className="skeletonLine skeletonTitle" />
          <div className="skeletonLine" />
          <div className="skeletonLine skeletonShort" />
        </div>
      ))}
    </div>
  );
}

export function PracticeCatalogEmpty({ onReset }: { onReset: () => void }) {
  return (
    <div className="catalogState" role="status">
      <span className="catalogStateIcon" aria-hidden="true">○</span>
      <h2>Подходящих практик не найдено</h2>
      <p>Попробуйте изменить запрос или сбросить выбранный тип практики.</p>
      <button type="button" className="stateButton" onClick={onReset}>Сбросить фильтры</button>
    </div>
  );
}

export function PracticeCatalogError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="catalogState catalogStateError" role="alert">
      <span className="catalogStateIcon" aria-hidden="true">!</span>
      <h2>Не удалось загрузить практики</h2>
      <p>Это тестовое состояние интерфейса. Попробуйте загрузить каталог ещё раз.</p>
      <button type="button" className="stateButton" onClick={onRetry}>Повторить</button>
    </div>
  );
}
