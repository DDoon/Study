import { getOptions } from 'src/app/product/detail'
import { useAppSelector } from 'src/hooks'

export const useFormControls = () => {
  const options = useAppSelector(getOptions)

  const getOptionId = (first: string, second = '') => {
    return options.find(
      (option) => option.explain === first && option.explain2 === second
    )!.id
  }

  return {
    getOptionId,
  } as const
}
