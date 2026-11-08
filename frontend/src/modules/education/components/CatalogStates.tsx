export function CatalogLoading() {
  return (
    <section aria-busy="true" aria-live="polite" aria-label="Загрузка материалов">
      <p className="stateAnnounce">Загружаем материалы…</p>
      <div className="materialsGrid">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="materialCard skeletonCard" key={index} aria-hidden="true">
            <div className="skeleton skeletonCover" />
            <div className="materialCardBody">
              <div className="skeleton line short" />
              <div className="skeleton line" />
              <div className="skeleton line" />
              <div className="skeleton line medium" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CatalogEmpty({ onReset }: { onReset: () => void }) {
  return (
    <section className="stateCard" aria-live="polite">
      <div className="stateSymbol" aria-hidden="true">⌕</div>
      <h2>По вашему запросу ничего не найдено</h2>
      <p>Попробуйте изменить запрос или убрать часть фильтров.</p>
      <button type="button" onClick={onReset}>Сбросить фильтры</button>
    </section>
  );
}

export function CatalogError({ onRetry }: { onRetry: () => void }) {
  return (
    <section className="stateCard isError" role="alert">
      <div className="stateSymbol" aria-hidden="true">!</div>
      <h2>Не удалось загрузить материалы</h2>
      <p>Проверьте соединение и попробуйте ещё раз.</p>
      <button type="button" onClick={onRetry}>Повторить</button>
    </section>
  );
}
