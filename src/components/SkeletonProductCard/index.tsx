import * as S from './styles'

type SkeletonProductCardProps = {
  $cardStyling: 'normal' | 'circular'
}

export const SkeletonProductCard = ({ $cardStyling } : SkeletonProductCardProps) => {
  return (
    <S.Container $cardStyling={$cardStyling}>
      <div className="image-loading skeleton" />
      <div className="title-loading skeleton" />
      <div className="price-loading skeleton" />

      {$cardStyling === 'circular' && (
        <div className="actions-container skeleton" />
      )}
    </S.Container>
  )
}
