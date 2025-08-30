import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://jsonplaceholder.typicode.com/users',
    ({ request, params, requestId }) => {
      return HttpResponse.json(
        [
          {
            name: 'Leanne Graham',
          },
          {
            name: 'Ervin Howell',
          },
          {
            name: 'Clementine Bauch',
          },
        ],
        { status: 200 }
      );
    }
  ),
];