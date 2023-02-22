import React from 'react'
import {ShowCard} from '../';

export default function ShowList({showData}) {
  return (
    <>
        { showData.filter(s => s.image ? true : false).map(s => <ShowCard key={s.id} show={s} />)}
    </>
  )
}
