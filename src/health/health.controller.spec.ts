import { HealthController } from './health.controller'

describe('HealthController', () => {
    let healthController: HealthController;

    beforeEach(() => {
        healthController = new HealthController();
    });

    describe('getStatus', () => {
        it('should return alive response as true', () => {
            const expectedResponse = {"alive": true};

            expect(healthController.getStatus()).toStrictEqual(expectedResponse);
        });
    });
});
