import { createSelector } from 'reselect'

const postInfoSelector = state => state.postInfo.allPosts
const getVisibilityFilter = state => state.categoryInfo.allCategories


// export const getVisiblePosts = createSelector(
//     postInfoSelector.find(post => post.id === post.ownProps.id)
// )


export const getVisiblePosts = createSelector(
    [getVisibilityFilter.categories, postInfoSelector ],
    (visibilityFilter, allPosts) => {
        if(visibilityFilter ===  'all'){
            return allPosts  
        }
        else {
            return allPosts.filter(post => post.category === visibilityFilter)
        }
    }
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