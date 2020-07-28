const initialState = {
  loading: false,
  modal: {},
  productAdvOpen: false,
  packageAdvOpen: false,
  shopBuyProductAdvOpen: false,
  compareProducts: [],
  comparePackages: [],
  compareProductsRT: [],
  comparePackagesRT: [],
  applyPn: '',
  phonePlanData: {},
  previewData: {},
  applyInfo: {}
}

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PREINGTABNAME":
      return {
        ...state,
        preIngTabName: action.value
      }

    default:
      return state
  }
}

export default statusReducer