import React from 'react'
import { connect } from 'react-redux'
import { buyFruit } from '../Redux'

function FruitContainer(props) {
    return (
        <div>
            <h1> Availavle Fruits Quantity - {props.numOfFruits} kg</h1>
            <button onClick={props.buyFruit}>Buy Fruits</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        numOfFruits: state.fruits.numOfFruits
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyFruit: () => dispatch(buyFruit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FruitContainer)
