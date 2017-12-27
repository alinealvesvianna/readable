import { createSelector } from 'reselect'


const postInfoSelector = state => state.postInfo.allPosts


export const getPostSelected = createSelector(
    postInfoSelector.find(post => post.id === post.ownProps.id)
)


// export const getPostSelected = createSelector(
//     postInfoSelector =>
//     allPosts.find(item => item.id === item.ownProps.id)
// )


// export const isChannelPickupSelectedAndSelectedSla = createSelector(
//     logisticsInfoSelector,
//     logisticsInfo =>
//       !!logisticsInfo.find(
//         item =>
//           item.selectedDeliveryChannel === PICKUP_IN_STORE &&
//           item.selectedSla !== null,
//       ),
//   )