---
navigation:
  title: Laravel Pipeline Gothca
  category: blog
---

# Laravel Pipeline Gothca



```php
class JourneyController extends Controller
{
    public function index(ListJourneysRequest $request): AnonymousResourceCollection
    {
        $journeys = app(Pipeline::class)
            ->send(Journey::query())
            ->through(pipes: [
                new FilterByStartTime($request),
                new FilterByDateRange($request),
                new FilterByDriver($request),
                new FilterByRegion($request),
                new FilterByLocationRestrictions($request),
                new VehicleNotDeactivated()
            ])
            ->thenReturn()
            ->paginate();

        return JourneyResource::collection($journeys);
    }
}
```

