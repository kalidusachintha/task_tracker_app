import { describe, it, vi, expect, beforeEach} from 'vitest'
import type { Mock } from 'vitest';
import useStatus from '@/composables/services/StatusService.ts'
import axios from 'axios'

vi.mock('axios')
describe('Test status service composables',() => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('should fetch all statuses', async () => {
    const mockStatusData = [
      { id: 1, name: 'Active' },
      { id: 2, name2: 'Inactive' },
    ];

    (axios.get as Mock).mockResolvedValue({
      data: {
        data: mockStatusData,
      },
    });

    const { getAll } = useStatus();
    const result = await getAll();

    expect(axios.get).toHaveBeenCalledWith('statuses');
    expect(result).toStrictEqual(mockStatusData);
  });

})

