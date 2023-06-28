import React, {ReactNode, useCallback} from "react";
import styles from './Popup.module.css'
import cn from "classnames";

interface Props {
  isVisible: boolean
  children: ReactNode
  setIsVisiblePopup: React.ComponentState
}

export const Popup = (props: Props) => {


  const closePopup: React.FormEventHandler = useCallback((e: React.ChangeEvent<HTMLDivElement>) => {
    if (
      e.target.className &&
      typeof e.target.className.includes !== "undefined" &&
      e.target.className.includes("popupWrapper")
    ) {
      props.setIsVisiblePopup(false);
    }
  },[])

  return (
    <div className={cn(styles.container, {
      [styles.container_type_invisible]: !props.isVisible,
      [styles.container_type_visible]: props.isVisible
    })} onClick={closePopup}>
      <div className={styles.popupWrapper}>
        <div className={styles.popup}>
          {props.children}
        </div>
      </div>
    </div>

  )
}
