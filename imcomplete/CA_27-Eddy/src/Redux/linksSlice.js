import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  links: [
    { title: 'Facebook', url: 'https://www.facebook.com' },
    { title: 'Google', url: 'https://www.google.com' },
    { title: 'BBC', url: 'https://www.bbc.co.uk' }
  ]
}

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links = state.links.concat([action.payload])
    },
    clearLinks: state => {
      state.links = []
    },
    loadLinkSuccess: (state, action) => {
      state.links = state.links.concat([...action.payload])
    },
    loadLinkFailure: (state, action) => {
      state.links = state.links
    }
  }
})

export const {
  addLink,
  clearLinks,
  loadLinkFailure,
  loadLinkSuccess
} = linksSlice.actions

export const loadLinkThunk = () => async dispatch => {
  try {
    let response = await axios.get('https://www.reddit.com/r/programming.json')
    let links = response.data.data.children.map(t => ({
      title: t.data.title,
      url: t.data.url
    }))
    dispatch(loadLinkSuccess(links))
  } catch (error) {
    console.log('Failed request', error)
    dispatch(loadLinkFailure())
  }
}

export default linksSlice.reducer
