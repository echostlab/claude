const workflows = {
  type: 'local',
  name: 'workflows',
  description: 'Workflow commands are unavailable in this leaked build',
  isEnabled: () => false,
  load: async () => ({ call: async () => undefined }),
}

export default workflows
