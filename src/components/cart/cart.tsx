import { useAppDispatch, useAppSelector } from "../../app/hooks";
import style from './cart.module.css'

const { container, otherContainer, Title, elements, containerElement, elemName, containerQuant, symbol, qta, containerBottom, title2, amountCss, checkout, classSymbol, priceCss, containerElement2, container_Checkout, finish, empty_Cart } = style

const Cart = () => {
    const { added } = useAppSelector(state => state.shop)
    const dispatch = useAppDispatch()
    let Partialamount = 0
    let amount = 0

    if (added.length > 0) {
        added.map((elem) => {
            Partialamount += Math.round(elem.price * elem.quantity)
        })
        amount += Math.round(Partialamount)
    }

    return (
        <div className={container}>
            <div className={otherContainer}>
                <div className={Title}>Carrello</div>
                <div className={elements}>
                    {added.map((elem, index) => {
                        if (elem.quantity > 0) {
                            return (
                                <div className={containerElement} key={index}>
                                    <div className={elemName}>{elem.name}:</div>
                                    <div className={containerQuant}>
                                        <div className={symbol} onClick={() => dispatch({ type: "MINUS_ONE", payload: { name: elem.name, price: elem.price, quantity: elem.quantity - 1 } })}>-</div>
                                        <div className={qta}>{elem.quantity}</div>
                                        <div className={symbol} onClick={() => dispatch({ type: "MINUS_ONE", payload: { name: elem.name, price: elem.price, quantity: elem.quantity + 1 } })}>+</div>

                                    </div>
                                    <div className={priceCss}>${Math.round(elem.price * elem.quantity)}</div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className={containerBottom}>
                    {amount === 0 ?
                        <div className={empty_Cart}>Il tuo carrello è vuoto</div> :
                        <div className={containerElement2}>
                            <div className={title2}>Totale: </div>
                            <div className={amountCss}>${amount}</div>
                        </div>
                    }
                    {(amount !== 0) ?
                        <div className={container_Checkout}>
                            <div className={finish}>Hai finito gli acquisti?</div>
                            <div onClick={() => dispatch({ type: "CLEAN_CART" })} className={checkout}>Vai al checkout</div>
                        </div> : null}
                </div>
            </div>

        </div>


    )
}

export default Cart;
