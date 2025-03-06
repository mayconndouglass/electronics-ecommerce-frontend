import * as S from './styles'

export const SkeletonCardCategory = () => {
  console.log('Renderizando SkeletonCardCategory a')

  return (
    <S.Container>
      <div className="skeleton image-loading" />
    </S.Container>
  )
}
