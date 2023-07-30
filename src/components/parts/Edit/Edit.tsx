import {FC} from "react";



const EditModals:FC =()=>{


    return(
        <>
            <div className={'editModals'}>
                <form className={'editModals__form'}>
                    <div className={'editModals__form__input'}>
                        <input type={'text'} placeholder={'Your new name'}/>
                    </div>
                    <div className={'editModals__form__button'}>
                        <button>Сохранить</button>
                        <button>Отменить</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditModals