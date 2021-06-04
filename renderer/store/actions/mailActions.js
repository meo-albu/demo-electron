
export const setMailList = (active) => {
  return {
    type: 'SET_MAIL_LIST',
    active
  }
}

export const setActiveMail = (activeMail) => {
  return {
    type: 'SET_ACTIVE_MAIL',
    activeMail
  }
}