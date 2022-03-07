import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { createApp } from '../application-bootstrap';

describe('SurveyController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await createApp(module);
    await app.init();
  });

  it('POST /v1/survey/answers should create survey answers', () => {
    return request(app.getHttpServer())
      .post('/v1/survey/answers')
      .send({
        survey_answers: [
          { question_id: '1', answer: ['I do'] },
          { question_id: '2', answer: ['I love Genopets'] },
        ],
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body.data.length).toBeGreaterThanOrEqual(2);
        expect(body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ question_id: '1', answer: ['I do'] }),
          ]),
        );
      });
  });

  it('GET /v1/survey/answers should fetch survey answers', async () => {
    await request(app.getHttpServer())
      .post('/v1/survey/answers')
      .send({
        survey_answers: [
          { question_id: '1', answer: ['I do'] },
          { question_id: '2', answer: ['I love Genopets'] },
        ],
      });

    await request(app.getHttpServer())
      .get('/v1/survey/answers')
      .expect(200)
      .expect(({ body }) => {
        expect(body.data.length).toBeGreaterThanOrEqual(2);

        expect(body.data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ question_id: '1', answer: ['I do'] }),
          ]),
        );
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
