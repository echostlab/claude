const peers = {
  type: 'local',
  name: 'peers',
  description: 'Peer commands are unavailable in this leaked build',
  isEnabled: () => false,
  load: async () => ({ call: async () => undefined }),
}

export default peers
