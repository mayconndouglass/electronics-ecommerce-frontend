import * as S from './styles'
import { useState } from 'react'

import { FaPencilAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

import { AnimatedButton } from '../../components/AnimatedButton'
import { Banner } from '../../components/Banner'
import { Center } from '../../components/Center'
import { CustomInput } from '../../components/CustomInput'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Togle } from './components/Togle'

import { states } from './data/states'
import payment from '../../../public/assets/images/payment.png'

import { FormError } from '../../components/FormError'
import { useSubmitForm } from './hooks/useSubmitForm'

export const Checkout = () => {
  const [DOBSelected, setDOBSelected] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    handleProcessCheckout,
    errors
  } = useSubmitForm()

  return (
    <>
      <Header />
      <Banner />
      <main>
        <S.Container>
          <Center>
            <div className="user-information">
              <div className="checkout-notice">
                <Togle
                  $containerSize={350}
                  $icon={<FaUser />}
                  $text='Já é cliente ?'
                  $clickableText='Clique aqui para fazer login'
                >
                  <p>Faça login para concluir a sua compra</p>
                  <form>
                    <CustomInput
                      id='email'
                      label='email'
                      type='email'
                      placeholder='email@example.com'
                      name='email'
                    />

                    <CustomInput
                      id='password'
                      label='senha'
                      type='password'
                      placeholder='informe sua senha'
                      name='password'
                    />

                    <AnimatedButton
                      color='white'
                      title='Entrar'
                      $background='#3577f0'
                      $padding={{ vertical: 1, horizontal: 2.375 }}
                      type={'submit'}
                    />
                  </form>
                </Togle>

                <Togle
                  $containerSize={190}
                  $icon={<FaPencilAlt />}
                  $text='Tem um cupom ?'
                  $clickableText='Clique aqui e insira seu código'
                >
                  <p>Se você tiver um código de cupom, aplique-o abaixo.</p>
                  <form className='coupon-form'>
                    <CustomInput
                      id='cupom'
                      label='Cupom'
                      type='text'
                      placeholder='Informe seu cupom'
                      name='cupom'
                    />

                    <AnimatedButton
                      title='Aplicar'
                      color='white'
                      $padding={{ vertical: 1, horizontal: 2.375 }}
                      $background='#3577f0'
                    />
                  </form>
                </Togle>
              </div>

              <form className="data" onSubmit={handleSubmit(handleProcessCheckout)}>
                <h4>Preencha seus dados</h4>

                <div className="form-name">
                  <div>
                    <CustomInput
                      id='name'
                      label='name'
                      type='text'
                      placeholder='John'
                      {...register('name')}
                    />
                    {errors.name && (
                      <FormError text={errors.name.message ?? ''} />
                    )}
                  </div>

                  <div>
                    <CustomInput
                      id='lastName'
                      label='Sobrenome'
                      type='text'
                      placeholder='Doe'
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <FormError text={errors.lastName.message ?? ''} />
                    )}
                  </div>
                </div>

                <div className="form-email">
                  <CustomInput
                    id='email'
                    label='email'
                    type='email'
                    placeholder='email@example.com'
                    {...register('email')}
                  />
                  {errors.email && (
                    <FormError text={errors.email.message ?? ''} />
                  )}
                </div>

                <div className="form-type-person">
                  <label htmlFor="pessoa-fisica">
                    <input
                      type="radio"
                      value="Pessoa Física"
                      id='pessoa-fisica'
                      checked
                      {...register('typePerson')}
                    />
                    Pessoa Fisíca
                  </label>

                  <label htmlFor="pessoa-juridica" className='teste'>
                    <input
                      type="radio"
                      value="Pessoa Jurídica"
                      id='pessoa-juridica'
                      {...register('typePerson')}
                    />
                    Pessoa Jurídica
                  </label>
                </div>

                <div className="cpf">
                  <CustomInput
                    id='cpf'
                    label='CPF'
                    type='text'
                    placeholder='123.456.789-10'
                    max={11}
                    {...register('cpf')}
                  />
                  {errors.cpf && (
                    <FormError text={errors.cpf.message ?? ''} />
                  )}
                </div>

                <div className="date-of-birth">
                  <CustomInput
                    id='birthdate'
                    label='Data de Nascimento'
                    type='date'
                    {...register('birthdate')}
                    onChange={(event) => setDOBSelected(event.target.value !== '')}
                    required
                    className={DOBSelected ? 'selected-date' : ''}
                  />
                  {errors.birthdate && (
                    <FormError
                      text={
                        errors.birthdate.message === 'Invalid date'
                          ? 'Campo Obrigatório'
                          : errors.birthdate.message ?? ''
                      } />
                  )}
                </div>

                <div className="phone">
                  <div>
                    <CustomInput
                      id='firstPhone'
                      label='Telefone 1'
                      type='tel'
                      placeholder='(00) 0000-0000'
                      {...register('firstPhone')}
                    />
                    {errors.firstPhone && (
                      <FormError text={errors.firstPhone.message ?? ''} />
                    )}
                  </div>

                  <div>
                    <CustomInput
                      id='secondPhone'
                      label='Telefone 2'
                      type='tel'
                      placeholder='(00) 0000-0000'
                      mandatory={false}
                      {...register('secondPhone')}
                    />
                    {errors.secondPhone && (
                      <FormError text={errors.secondPhone.message ?? ''} />
                    )}
                  </div>
                </div>

                <div className="address">
                  <div>
                    <CustomInput
                      id='zipCode'
                      label='CEP'
                      type='text'
                      placeholder='00000-000'
                      maxLength={9}
                      {...register('zipCode')}
                    />
                    {errors.zipCode && (
                      <FormError text={errors.zipCode.message ?? ''} />
                    )}
                  </div>

                  <div className="street">
                    <div>
                      <CustomInput
                        id='street'
                        label='Rua'
                        type='text'
                        placeholder='Nome da Rua'
                        {...register('street')}
                      />
                      {errors.street && (
                        <FormError text={errors.street.message ?? ''} />
                      )}
                    </div>

                    <div>
                      <CustomInput
                        label='N°'
                        id='houseNumber'
                        type='number'
                        placeholder='999'
                        {...register('houseNumber')}
                      />
                      {errors.houseNumber && (
                        <FormError text={errors.houseNumber.message ?? ''} />
                      )}
                    </div>
                  </div>

                  <div className='state-city'>
                    <div>
                      <label htmlFor="state">
                        Estado <span>*</span>
                      </label>

                      <select
                        id="state"
                        {...register('state')}
                      >
                        <option value="" disabled>
                          Escolha seu estado
                        </option>
                        {states.map(({ abbreviation }) => (
                          <option
                            key={abbreviation}
                            value={abbreviation}
                          >
                            {abbreviation}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <FormError text={errors.state.message ?? ''} />
                      )}
                    </div>

                    <div>
                      <CustomInput
                        label='Cidade'
                        id='city'
                        type='tex'
                        placeholder='Teresina'
                        {...register('city')}
                      />
                      {errors.city && (
                        <FormError text={errors.city.message ?? ''} />
                      )}
                    </div>
                  </div>

                  <div>
                    <CustomInput
                      label='Bairro'
                      id='neighborhood'
                      type='text'
                      placeholder='Catanduvas'
                      {...register('neighborhood')}
                    />
                    {errors.neighborhood && (
                      <FormError text={errors.neighborhood.message ?? ''} />
                    )}
                  </div>

                  <CustomInput
                    label='Complemento'
                    id='complement'
                    type='text'
                    placeholder='Apartamento, suite, etc'
                    mandatory={false}
                    max={300}
                    {...register('complement')}
                  />
                  {errors.complement && (
                    <FormError text={errors.complement.message ?? ''} />
                  )}
                </div>
              </form>
            </div>

            <div className='purchase-information'>
              <h5>Sua Compra</h5>
              <form onSubmit={handleSubmit(handleProcessCheckout)}>
                <div className="product-table">
                  <ul>
                    <li>
                      <h5>Produtos</h5>
                      <span>Subtotal</span>
                    </li>

                    <li>
                      <p>Commodo Blown Lamp <span>x1</span></p>
                      <span>R$ 117,00</span>
                    </li>

                    <li>
                      <p>Commodo Blown Lamp 2<span>x13</span></p>
                      <span>R$ 138,00</span>
                    </li>

                    <li className='shipping-method'>
                      <div className="shipping-method-title">
                        <h6>Método de Pagamento</h6>
                        <span>R$ 35,00</span>
                      </div>

                      <label htmlFor="correios-pac">
                        <input
                          type="radio"
                          value="Correios PAC"
                          id='correios-pac'
                          {...register('shippingMethod')}
                        />
                        Correios PAC
                      </label>

                      <label htmlFor="correios-sedex">
                        <input
                          type="radio"
                          value="Correios Sedex"
                          id='correios-sedex'
                          {...register('shippingMethod')}
                        />
                        Correios Sedex
                      </label>

                      <label htmlFor="transportadora-propria">
                        <input
                          type="radio"
                          value="Transportadora Própria"
                          id='transportadora-propria'
                          {...register('shippingMethod')}
                        />
                        Transportadora Própria
                      </label>

                      <label htmlFor="retirada">
                        <input
                          type="radio"
                          value="Retirar na Loja"
                          id='retirada'
                          // checked={shippingMethod === 'Retirar na Loja'}
                          {...register('shippingMethod')}
                        />
                        Retirar na Loja
                      </label>
                    </li>

                    <li className='total-order'>
                      <h5>Total</h5>
                      <span>R$ 500,00</span>
                    </li>
                  </ul>
                </div>

                <div className="payment-method">
                  <ul>
                    <li>
                      <label htmlFor="cartao-credito">
                        <input
                          type="radio"
                          value="Cartão de Crédito"
                          id='cartao-credito'
                          {...register('paymentMethod')}
                        />
                        Cartão de Crédito

                        <img src={payment} alt="métodos de pagamento" />
                      </label>

                      <p>Pague com paypal ou cartão de crédito, nós aceitamos várias bandeiras</p>
                    </li>

                    <li>
                      <label htmlFor="pix">
                        <input
                          type="radio"
                          value="PIX"
                          id='pix'
                          {...register('paymentMethod')}
                        />
                        PIX
                      </label>

                      <p>O código Pix gerado para o pagamento é válido por 30 minutos após a finalização do pedido.</p>
                    </li>

                    <li>
                      <label htmlFor="boleto">
                        <input
                          type="radio"
                          value="Boleto"
                          id='boleto'
                          {...register('paymentMethod')}
                        />
                        Boleto
                      </label>

                      <p>Vencimento em 1 dia útil. A data de entrega será alterada devido ao tempo de processamento do Boleto.</p>
                    </li>
                  </ul>

                  <AnimatedButton
                    title='Finalizar Compra'
                    $background='#3577F0'
                    color='white'
                    $padding={{ vertical: 1, horizontal: 2.375 }}
                    type={'submit'}
                  />
                </div>
              </form>
            </div>
          </Center>
        </S.Container>
      </main>
      <Footer />
    </>
  )
}
