export const state = {
    posts: [],
    currentSlide: 0,
    slideTimer: null,
    currentFilter: 'todas',
};

export function getFilteredPosts() {
    if (state.currentFilter === 'todas') return state.posts;
    return state.posts.filter(p =>
        String(p.category_id) === String(state.currentFilter) ||
        p.category === state.currentFilter
    );
}

export function findPost(id) {
    return state.posts.find(p => String(p.id) === String(id)) || null;
}
