<?php

namespace App\Traits;

trait NullableFields
{
    protected function nullIfEmpty($input)
    {
        return trim($input) == '' ? null : trim($input);
    }

    protected function trimIfEmpty($input)
    {
        return trim($input) == '' ? '' : $input;
    }

    protected function emptyIfEmpty($input)
    {
        return empty($input) ? '' : $input;
    }
}