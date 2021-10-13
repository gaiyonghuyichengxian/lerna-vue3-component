const mds: any = {
}

const files = require.context('.', true, /\.md$/)
files.keys().forEach(key => {
  mds[key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))] = files(key).default
})

export default {
  ...mds
}
