import axiosInstance from '@/lib/axios';
import { AddMoodData } from '@/model/addMoodData';

// 감정 조회
export async function getRecords(start: string, end: string) {
  const response = await axiosInstance.get(
    `/api/v1/record?start=${start}&end=${end}`
  );
  return response.data;
}

// 감정 등록
export default function postRecord(data: AddMoodData) {
  return axiosInstance.post('api/v1/memo', data);
}

// 감정 수정 (단일) => 변경 가능한 데이터 : 감정, 메모 (다른데이터 변경 불가능)
export async function updateRecord(
  recordId: number,
  data: {
    feelingId: number;
    memo: string;
  }
) {
  const response = await axiosInstance.put(`api/v1/memo/${recordId}`, data);
  return response.data;
}

// 감정 삭제 (단일)
export async function removeRecord(recordId: number) {
  const response = await axiosInstance.delete(`api/v1/memo/${recordId}`);
  return response.data;
}
