<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK exists test

require_once __DIR__ . '/../neugeborenenvornamenkantonstgallen_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = NeugeborenenVornamenKantonStgallenSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
