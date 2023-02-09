import React from 'react'
import { useFirebase } from 'src/hooks/useFirebase'
import { useAppDispatch, useMount } from 'src/hooks'
import { setProduct } from 'src/app/product/detail'
import camelcaseKeys from 'camelcase-keys'
import { ProductDetailOverview } from './Overview/ProductDetailOverview'
import { ProductTab } from './ProductTab'
import { ProductSpec } from './ProductSpec'

export const ProductDetailPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { getData } = useFirebase()

  const fetchProduct = () => {
    getData(`product/0`).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(setProduct(camelcaseKeys(snapshot.val(), { deep: true })))
      }
    })
  }

  useMount(fetchProduct)

  return (
    <main>
      <ProductDetailOverview />
      <ProductTab />
      <ProductSpec />
    </main>
  )
}
