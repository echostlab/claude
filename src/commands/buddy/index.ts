const buddy = {
  type: 'local',
  name: 'buddy',
  description: 'Buddy commands are unavailable in this leaked build',
  isEnabled: () => false,
  load: async () => ({ call: async () => undefined }),
}

export default buddy
