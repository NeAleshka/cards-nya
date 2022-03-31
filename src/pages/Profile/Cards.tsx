import React from 'react';
import style from './Cards.module.css'
import {useSelector} from "react-redux";
import {RootReducerType} from "../../redux/store";
import {CardsType} from "../../redux/reducers/cardReducer";
// import {CardsType} from "../../redux/reducers/cardReducer";

const Cards = () => {
    const cards = useSelector<RootReducerType, CardsType[] | null>(state => state.cards.cardPacks)
    if (cards) {
        return (
            <div>
                <table className={style.table}>
                    <tr>
                        <td className={style.row}>Name</td>
                        <td className={style.row}>Cards</td>
                        <td className={style.row}>Last Update</td>
                        <td className={style.row}>Created By</td>
                        <td className={style.row}>Actions</td>
                    </tr>
                    {cards.map((el) => (
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.cardsCount}</td>
                            <td>{el.updated}</td>
                            <td>{el.user_name}</td>
                            <td>
                                <button>Learn</button>
                            </td>
                        </tr>)
                    )}

                </table>
            </div>)
    } else {
        return <div>
            <h1>d</h1>
        </div>
    }
};

export default Cards;