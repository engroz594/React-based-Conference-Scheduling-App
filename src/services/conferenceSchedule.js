import Http from '../configs/Http';

export const getTimeSlotsByDay = async day => {
    return await Http.get(process.env.REACT_APP_API_URL + "schedule?day=" + day)
};

export const getSessionContent = async session => {
    return await Http.get(process.env.REACT_APP_API_URL + "content?session=" + session.sessionId)
};
