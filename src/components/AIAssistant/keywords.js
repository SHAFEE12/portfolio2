export function matchKeyword(input = '') {
  const normalized = input.toLowerCase().trim();

  if (normalized.includes('project')) return 'show me your projects';
  if (normalized.includes('contact') || normalized.includes('reach')) return 'how can i contact you';
  if (normalized.includes('work') || normalized.includes('experience') || normalized.includes('skills')) return 'tell me about your work';

  return null;
}
