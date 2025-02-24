export const initialState = {
    diceResults: [],
    tripleSixCount: 0,
    numberOfExperiments: 100,
    history: JSON.parse(localStorage.getItem('diceHistory')) || []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ROLL_DICE':
        const newHistory = [...state.history, {
          date: new Date().toLocaleString(),
          experiments: state.numberOfExperiments,
          tripleSixCount: action.tripleSixCount,
          percentage: ((action.tripleSixCount / state.numberOfExperiments) * 100).toFixed(2)
        }];
        localStorage.setItem('diceHistory', JSON.stringify(newHistory));
        return {
          ...state,
          diceResults: action.results,
          tripleSixCount: action.tripleSixCount,
          history: newHistory
        };
      case 'SET_EXPERIMENTS':
        return {
          ...state,
          numberOfExperiments: action.value,
        };
      case 'CLEAR_HISTORY':
        localStorage.removeItem('diceHistory');
        return {
          ...state,
          history: []
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };
  