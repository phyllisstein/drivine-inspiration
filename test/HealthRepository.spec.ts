import { HealthRepository } from '@/health/HealthRepository';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/AppModule';
import { inTestContext } from '@liberation-data/drivine/test/TestContext';

describe('HealthRepository', () => {
    let repo: HealthRepository;

    beforeAll(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
            providers: [HealthRepository],
            controllers: []
        }).compile();
        repo = app.get(HealthRepository);
    });

    it('should count all nodes', async () => {
        return inTestContext().run(async () => {
            const results = await repo.countAllVertices();
            expect(results).toBeGreaterThan(0);
            console.log(`Got results: ${results}`);
        });
    });
});
