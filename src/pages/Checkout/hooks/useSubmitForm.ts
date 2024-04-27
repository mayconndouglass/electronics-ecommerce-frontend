import { useForm } from 'react-hook-form'
import { CheckoutFormSchema } from '../schemas/checkout'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'
import { useEffect } from 'react'
import { api } from '../../../services/api'
import { handleLocalStorageToken } from '../../../utils/handle-local-storage-token'

type checkoutFormDataType = z.infer<typeof CheckoutFormSchema>


interface adressType {
  bairro: string
  localidade: string
  logradouro: string
  uf: string
}

export const useSubmitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger
  } = useForm<checkoutFormDataType>({
    criteriaMode: 'all',
    mode: 'all',
    defaultValues: {
      shippingMethod: 'Correios PAC',
      paymentMethod: 'Cartão de Crédito'
    },
    resolver: zodResolver(CheckoutFormSchema)
  })

  const handleProcessCheckout = async (data: checkoutFormDataType) => {
    console.log('CHECKOUT HANDLE', data)
    const token = handleLocalStorageToken().getToken()

    try {
      //TODO: Provisório
      const response = await api.post(
        '/register-order',
        {
          ...data,
          status: 'Em Processamento',
          phones: [data.firstPhone, data.secondPhone],
          shippingFee: '30RIAL',
          totalPayable: '3000RIAL',

        },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      return response.data
    } catch (error) {
      /* if (error instanceof AxiosError) {
        console.log(error.response?.data.message)
        return
      } */

      console.log('Erro na requisição:', error)
    }
  }

  const cep = watch('zipCode')

  const handleFetchAdress = async (cep: string): Promise<adressType> => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    )

    return data
  }

  useEffect(() => {
    if (cep && cep.length === 9) {
      handleFetchAdress(cep).then((data) => {
        setValue('street', data.logradouro)
        setValue('state', data.uf)
        setValue('city', data.localidade)
        setValue('neighborhood', data.bairro)

        trigger(['street', 'state', 'city', 'neighborhood'])
      })

      return
    }

    setValue('street', '')
    setValue('state', '')
    setValue('city', '')
    setValue('neighborhood', '')
  }, [cep])

  return {
    register,
    errors,
    handleSubmit,
    handleProcessCheckout
  }
}
