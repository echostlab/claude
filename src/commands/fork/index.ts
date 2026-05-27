const fork = {
  type: 'local',
  name: 'fork',
  description: 'Fork commands are unavailable in this leaked build',
  isEnabled: () => false,
  load: async () => ({ call: async () => undefined }),
}

export default fork
